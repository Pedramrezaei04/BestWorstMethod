from django import template

register = template.Library()

@register.filter
def custom_range(value):
    try:
        value = int(value)
        return range(value)
    except (ValueError, TypeError):
        return None
