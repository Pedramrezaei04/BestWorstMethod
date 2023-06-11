from django import forms

class BWMForm(forms.Form):
    num_criteria = forms.ChoiceField(
        choices=[
            ("Select Number Of Criteria", "Select Number Of Criteria"),
            ("3", "3"), ("4", "4"), ("5", "5"),
            ("6", "6"), ("7", "7"), ("8", "8"),
            ("9", "9")
        ]
    )
    criteria_labels = forms.CharField(widget=forms.Textarea(attrs={'rows': '5'}))  # Update widget to display multiple rows
    best_values = forms.CharField(widget=forms.Textarea)
    worst_values = forms.CharField(widget=forms.Textarea)
