from django import forms

class BWMForm(forms.Form):
    num_criteria = forms.ChoiceField(
        choices=[
            ("Select Number Of Criteria", "Select Number Of Criteria"),
            ("3", "3"), ("4", "4"), ("5", "5"),
            ("6", "6"), ("7", "7"), ("8", "8"),
            ("9", "9")
        ],
        widget=forms.Select(attrs={'class': 'criteria-dropdown', 'id': 'id_num_criteria'})
    )


