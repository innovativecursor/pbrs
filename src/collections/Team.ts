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
      label: 'Social Media Facebook Link',
      name: 'emp_fb',
      type: 'text',
      required: false,
    },
    {
      label: 'Social Media Whatsapp Link',
      name: 'emp_wa',
      type: 'text',
      required: false,
    },
  ],
  upload: true,
}
