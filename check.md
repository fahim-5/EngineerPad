# ER Diagram for MySQL Schema

Below is the Entity-Relationship (ER) diagram for your MySQL database schema, represented using Mermaid syntax. You can view this diagram in Markdown viewers that support Mermaid diagrams (such as GitHub, GitLab, or VS Code with the appropriate extension).

```mermaid
erDiagram
  ADDRESS_BASED_ALERTS {
    INT id
    INT alert_id
    INT user_id
    TIMESTAMP created_at
  }
  ADMIN {
    INT id
    VARCHAR full_name
    VARCHAR username
    VARCHAR email
    VARCHAR national_id
    VARCHAR passport
    VARCHAR mobile_no
    VARCHAR password
    VARCHAR address
    TIMESTAMP created_at
    TIMESTAMP updated_at
  }
  CASES {
    INT id
    INT report_id
    VARCHAR case_number
    ENUM status
    INT assigned_to
    ENUM priority
    TEXT notes
    TIMESTAMP created_at
    TIMESTAMP updated_at
    TIMESTAMP closed_at
  }
  CASE_UPDATES {
    INT id
    INT case_id
    INT update_by
    TEXT update_text
    TINYINT is_public
    TIMESTAMP created_at
  }
  COMMENTS {
    INT id
    INT report_id
    INT user_id
    TEXT comment
    TIMESTAMP created_at
    TIMESTAMP updated_at
  }
  CRIME_ALERTS {
    INT id
    INT report_id
    VARCHAR title
    TEXT description
    VARCHAR location
    ENUM type
    ENUM alert_type
    ENUM status
    ENUM severity
    INT created_by
    INT assigned_to
    TEXT response_details
    LONGTEXT details
    TIMESTAMP created_at
    TIMESTAMP expires_at
    TIMESTAMP resolved_at
    TIMESTAMP updated_at
  }
  CRIME_AREAS {
    INT id
    VARCHAR district
    VARCHAR thana
    VARCHAR area_name
    VARCHAR coordinates
    ENUM risk_level
    DATE last_incident_date
    TIMESTAMP created_at
    TIMESTAMP updated_at
  }
  CRIME_CATEGORIES {
    INT id
    VARCHAR name
    TEXT description
    ENUM severity_level
    TIMESTAMP created_at
    TIMESTAMP updated_at
  }
  CRIME_REPORTS {
    INT id
    VARCHAR crime_id
    VARCHAR location
    DATETIME time
    VARCHAR crime_type
    INT num_criminals
    VARCHAR victim_gender
    VARCHAR armed
    LONGTEXT photos
    LONGTEXT videos
    TIMESTAMP created_at
    INT reporter_id
    VARCHAR reporter_address
    ENUM status
    INT category_id
    VARCHAR police_id
    TIMESTAMP case_taken_at
  }
  EMERGENCY_CONTACTS {
    INT id
    VARCHAR name
    ENUM service_type
    VARCHAR phone_number
    VARCHAR address
    VARCHAR district
    VARCHAR thana
    TINYINT available_24_7
    TIMESTAMP created_at
    TIMESTAMP updated_at
  }
  EVIDENCE {
    INT id
    INT report_id
    INT uploaded_by
    VARCHAR file_path
    VARCHAR file_type
    VARCHAR description
    TINYINT is_verified
    INT verified_by
    TIMESTAMP uploaded_at
    TIMESTAMP verified_at
  }
  FEEDBACK {
    INT id
    INT user_id
    TEXT feedback_text
    ENUM feedback_type
    INT rating
    INT responded_by
    TEXT response
    TIMESTAMP created_at
    TIMESTAMP responded_at
  }
  NOTIFICATIONS {
    INT id
    INT user_id
    VARCHAR message
    ENUM type
    TINYINT is_read
    TIMESTAMP created_at
    TIMESTAMP read_at
  }
  POLICE {
    INT id
    VARCHAR username
    VARCHAR email
    VARCHAR national_id
    VARCHAR police_id
    VARCHAR badge_number
    VARCHAR full_name
    VARCHAR rank
    VARCHAR station
    INT station_id
    VARCHAR mobile_no
    VARCHAR password
    VARCHAR address
    TIMESTAMP created_at
    TIMESTAMP updated_at
  }
  POLICE_ALERTS {
    INT id
    INT report_id
    INT police_id
    VARCHAR alert_message
    ENUM status
    TIMESTAMP created_at
    TIMESTAMP updated_at
  }
  POLICE_FILES {
    INT id
    INT police_id
    VARCHAR file_path
    VARCHAR file_type
    VARCHAR description
    TIMESTAMP uploaded_at
  }
  POLICE_STATIONS {
    INT id
    VARCHAR name
    VARCHAR district
    VARCHAR thana
    VARCHAR address
    VARCHAR phone_number
    TIMESTAMP created_at
    TIMESTAMP updated_at
  }
  PUBLIC {
    INT id
    VARCHAR username
    VARCHAR email
    VARCHAR national_id
    VARCHAR full_name
    VARCHAR mobile_no
    VARCHAR password
    VARCHAR address
    TIMESTAMP created_at
    TIMESTAMP updated_at
  }
  REQUESTS {
    INT id
    VARCHAR username
    VARCHAR email
    VARCHAR national_id
    VARCHAR police_id
    VARCHAR badge_number
    VARCHAR full_name
    VARCHAR rank
    VARCHAR station
    VARCHAR mobile_no
    VARCHAR password
    VARCHAR address
    TIMESTAMP created_at
    TIMESTAMP updated_at
  }
  USERS {
    INT id
    VARCHAR username
    VARCHAR email
    VARCHAR national_id
    VARCHAR police_id
    VARCHAR badge_number
    VARCHAR full_name
    VARCHAR mobile_no
    VARCHAR password
    VARCHAR address
    ENUM status
    ENUM role
    TIMESTAMP created_at
    TIMESTAMP updated_at
  }
  VALIDATIONS {
    INT id
    INT report_id
    INT user_id
    TINYINT is_valid
    TIMESTAMP created_at
  }

  ADDRESS_BASED_ALERTS ||--o{ CRIME_ALERTS : "alert_id"
  ADDRESS_BASED_ALERTS ||--o{ USERS : "user_id"
  CASES ||--o{ CRIME_REPORTS : "report_id"
  CASES ||--o{ POLICE : "assigned_to"
  CASE_UPDATES ||--o{ CASES : "case_id"
  CASE_UPDATES ||--o{ USERS : "update_by"
  COMMENTS ||--o{ CRIME_REPORTS : "report_id"
  COMMENTS ||--o{ USERS : "user_id"
  CRIME_ALERTS ||--o{ CRIME_REPORTS : "report_id"
  CRIME_ALERTS ||--o{ USERS : "created_by"
  CRIME_ALERTS ||--o{ USERS : "assigned_to"
  CRIME_AREAS ||--o{ POLICE_STATIONS : "district"
  CRIME_CATEGORIES ||--o{ CRIME_REPORTS : "category_id"
  CRIME_REPORTS ||--o{ USERS : "reporter_id"
  CRIME_REPORTS ||--o{ CRIME_CATEGORIES : "category_id"
  CRIME_REPORTS ||--o{ POLICE : "police_id"
  EVIDENCE ||--o{ CRIME_REPORTS : "report_id"
  EVIDENCE ||--o{ USERS : "uploaded_by"
  EVIDENCE ||--o{ USERS : "verified_by"
  FEEDBACK ||--o{ USERS : "user_id"
  FEEDBACK ||--o{ ADMIN : "responded_by"
  NOTIFICATIONS ||--o{ USERS : "user_id"
  POLICE ||--o{ POLICE_STATIONS : "station_id"
  POLICE_ALERTS ||--o{ CRIME_REPORTS : "report_id"
  POLICE_ALERTS ||--o{ POLICE : "police_id"
  POLICE_FILES ||--o{ POLICE : "police_id"
  REQUESTS ||--o{ POLICE : "police_id"
  REQUESTS ||--o{ POLICE : "badge_number"
  USERS ||--o{ POLICE : "police_id"
  USERS ||--o{ POLICE : "badge_number"
  VALIDATIONS ||--o{ CRIME_REPORTS : "report_id"
  VALIDATIONS ||--o{ USERS : "user_id"
```
