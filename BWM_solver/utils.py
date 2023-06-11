import numpy as np
from scipy.optimize import linprog

def calculate_weights(compared2best, compared2worst):
        keys = sorted(compared2best.keys())
        n = len(keys)

        # Add the normalization constraint
        A_eq = np.zeros((1, n + 1))  # one more column for the max difference
        A_eq[0, :n] = 1
        b_eq = np.array([1])

        # Prepare the objective
        c = np.zeros(n)
        c = np.append(c, 1)  # Add variable for maximum difference

        # Best criterion
        best_key = min(compared2best, key=compared2best.get)
        best_index = keys.index(best_key)

        # Worst criterion
        worst_key = min(compared2worst, key=compared2worst.get)
        worst_index = keys.index(worst_key)

        A_ub = []
        b_ub = []

        # Create constraints for each criterion
        for i, key in enumerate(keys):
            if i != best_index:
                constraint_row = np.zeros(n)
                constraint_row[i] = compared2best[key]
                constraint_row[best_index] = -1
                constraint_row = np.append(constraint_row, -1)
                A_ub.append(constraint_row)
                b_ub.append(0)

                constraint_row = np.zeros(n)
                constraint_row[i] = -compared2best[key]
                constraint_row[best_index] = 1
                constraint_row = np.append(constraint_row, -1)
                A_ub.append(constraint_row)
                b_ub.append(0)

        for i, key in enumerate(keys):
            if i != best_index and i != worst_index:
                constraint_row = np.zeros(n)
                constraint_row[i] = -1
                constraint_row[worst_index] = compared2worst[key]
                constraint_row = np.append(constraint_row, -1)
                A_ub.append(constraint_row)
                b_ub.append(0)

                constraint_row = np.zeros(n)
                constraint_row[i] = 1
                constraint_row[worst_index] = -compared2worst[key]
                constraint_row = np.append(constraint_row, -1)
                A_ub.append(constraint_row)
                b_ub.append(0)

        A_ub = np.array(A_ub)
        b_ub = np.array(b_ub)

        bounds = [(0, None) for _ in range(n + 1)]  # Weights are non-negative

        res = linprog(c, A_ub=A_ub, b_ub=b_ub, A_eq=A_eq, b_eq=b_eq, bounds=bounds, method='highs')

        weights = res.x[:n]

        weights_dict = {}
        for i, key in enumerate(keys):
            weights_dict[key] = weights[i]

        consistency_ratio = max(0, res.fun)

        return weights_dict, consistency_ratio
