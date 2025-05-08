import type { CollectionConfig } from 'payload'

export const Team: CollectionConfig = {
  slug: 'team',
  access: {
    read: () => true,
  },
  fields: [
    {
      label: 'Employee Name',
      name: 'emp_name',
      type: 'text',
      required: true,
    },
    {
      label: 'Designation',
      name: 'emp_designation',
      type: 'text',
      required: true,
    },
    {
      label: 'Employee Email',
      name: 'emp_email',
      type: 'email',
      required: false,
    },
    {
      label: 'Employee Number',
      name: 'emp_phone',
      type: 'text',
      required: false,
    },
    {
      label: 'Available for Support',
      name: 'emp_support',
      type: 'checkbox',
      defaultValue: false,
      required: false,
    },
  ],
  upload: true,
}
