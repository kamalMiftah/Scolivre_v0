from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from .models import User, UserProfile, Command


class CommandAdmin(admin.ModelAdmin):
    list_display = ('command_id', 'name', 'phone_number', 'city', 'uploaded_at', 'order_state')
    list_filter = ('order_state', 'city', 'uploaded_at')
    search_fields = ('command_id', 'name', 'phone_number', 'comment_client')
    readonly_fields = ('command_id', 'uploaded_at')
    fieldsets = (
        ('Client Information', {'fields': ('command_id', 'name', 'phone_number')}),
        ('Address', {'fields': ('home_address', 'city')}),
        ('Order Details', {'fields': ('image', 'uploaded_at', 'order_state')}),
        ('Comments', {'fields': ('comment_client', 'comment_admin')}),
    )


admin.site.register(Command, CommandAdmin)


class UserProfileInline(admin.StackedInline):
    model = UserProfile
    can_delete = False


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (('Personal info'), {'fields': ('first_name', 'last_name')}),
        (('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser',
                                       'groups', 'user_permissions')}),
        (('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2'),
        }),
    )
    list_display = ('email', 'first_name', 'last_name', 'is_staff')
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)
    inlines = (UserProfileInline, )