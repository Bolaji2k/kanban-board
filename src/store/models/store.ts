export interface Contacts {
    count: number
    next: string | null
    previous: string | null
    page_size: number
    results: Contact[]
  }
  
  export interface Contact {
    id: string
    full_name: string
    first_name: string
    last_name: string
    email: string
    nationality_code: string
    country_code?: string
    phone_number: string
    status: string
    lost_reason?: string
    lost_reason_comments: string | null
    held_by:string | null
    hold_expired_at: string | null
    stage: string
    assigned_to: string
    source: string | null
    created_at: string
  }
  
  export interface Stages {
    count: number
    next: string | null
    previous: string | null
    page_size: number
    results: Stage[]
  }
  
  export interface Stage {
    id: string
    name: string
    header_color: string
    description: string
    pipeline: string
    order: number
    created_at: string
  }
  