import { LightningElement } from 'lwc';
import SearchByAccount from '@salesforce/apex/accountSearch.SearchByAccount';

 
export default class SearchByAccounts extends LightningElement {
  searchkey = '';
  account = [];
  errormessage = '';
  columns = [{label:'Account Name',fieldName:'Name',type:'text'},{label:'Phone',fieldName:'Phone',type:'phone'}];


  get hasResults() {
    return Array.isArray(this.account) && this.account.length > 0;
  }

  get showNoResults() {
    return this.searchkey && Array.isArray(this.account) && this.account.length === 0;
  }

  handleSearch(event) {
    this.searchkey = event.target.value;
    // Optional: reset intermediate state
    this.account = [];
    this.errormessage = '';
  }

  
searchTask() {
  const input = this.template.querySelector('lightning-input');
  this.searchkey = input?.value?.trim() || this.searchkey?.trim() || '';

  if (!this.searchkey) {
    alert('Please enter a search term.');
    return;
  }

  SearchByAccount({ keyword: this.searchkey })
    .then(result => {
      // Force new array reference to be extra-safe for reactivity
      this.account = Array.isArray(result) ? [...result] : [];
      console.log('Accounts:', JSON.stringify(this.account));
    })
    .catch(error => {
      console.error('Error in fetching accounts:', error);
      this.errormessage = error?.body?.message || 'Unknown error';
      this.account = [];
    });
}

}
