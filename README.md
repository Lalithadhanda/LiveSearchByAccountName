# Salesforce LWC - LiveSearch Accounts

A Lightning Web Component that provides real-time account search functionality in Salesforce.

## Features
- Real-time account search by name
- Results displayed in Lightning Datatable
- Responsive design
  - Lightning-fast search experience

## Components

### Lightning Web Component
- **searchByAccounts** - Main search component with datatable display

### Apex Class
- **accountSearch** - Backend controller for account search queries

## Installation

### Prerequisites
- Salesforce CLI installed
- VS Code with Salesforce Extensions
- Git installed
- GitHub account

### Deploy to Salesforce Org

1. Clone the repository:
```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
```

2. Authorize your Salesforce org:
```bash
sfdx auth:web:login -a MyOrgAlias
```

3. Deploy the code:
```bash
sfdx force:source:deploy -p force-app/main/default
```

### Using Scratch Org

1. Create a scratch org:
```bash
sfdx force:org:create -f config/project-scratch-def.json -a ScratchOrgAlias
```

2. Push source to scratch org:
```bash
sfdx force:source:push -u ScratchOrgAlias
```

3. Open the scratch org:
```bash
sfdx force:org:open -u ScratchOrgAlias
```

## Usage

1. Add the component to a Lightning page:
   - Go to any Account record page
   - Click the gear icon and select "Edit Page"
   - Drag the "LiveSearch Accounts" component to the desired location
   - Save and activate

2. Search for accounts:
   - Enter account name in the search box
   - Click "Search Account" button
   - View results in the datatable

## Component Configuration

### searchByAccounts.js-meta.xml
```xml


    60.0
    true
    
        lightning__AppPage
        lightning__RecordPage
        lightning__HomePage
    

```

## Technical Details

- **API Version**: 60.0
- **Apex Method**: Cacheable for better performance
- **Search Type**: SOQL LIKE query with wildcard matching
- **Limit**: 50 records (configurable)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Lalitha Dhandapani - https://www.linkedin.com/in/lalitha-dhandapani/

## Acknowledgments

- Salesforce Lightning Web Components Documentation
- Salesforce Trailhead
