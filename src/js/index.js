import Search from './models/Search'
import * as searchView from './views/searchView'
import * as opportunityView from './views/opportunityView'
import { elements, renderLoader, clearLoader } from './views/base'

const search = new Search();

//** Search controller*/
async function controlSearch(){
    
    // new search object
      

        //prepare UI for results
       searchView.clearInput();
       searchView.clearResults();
       renderLoader(elements.searchRes);

        // display opportunities
        try{
            
        await search.getResults();

        // render results on UI
        clearLoader();
        searchView.renderResults(search.resultCust);
        }catch(error){
            alert('Something went wrong!!');
            clearLoader();
        }

};

//** Opportunity controller*/
function controlOpportunity(){
    
    const id = window.location.hash.replace('#', '').replace(/%20/g,' ');

    //prepare new UI
    opportunityView.clearDetails();

    //Highlight selected item
    searchView.highlightSelected(id);

    try{
        console.log('check');
   let oppoResults = search.assignmentofRepresentative();
   console.log(oppoResults);
   
   for(let i=0; i<oppoResults.length; i++){
    
    if(oppoResults[i].company.name === id){
        
        opportunityView.renderDetails(oppoResults[i]);

      }
   }

    }catch(error){
        alert('Error processing the request');
    }
    
};

//render the list of opportunities
elements.searchResList.addEventListener('load',controlSearch());

//display the opportunity
window.addEventListener('hashchange', controlOpportunity);

//search for list of customers and representatives
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();

    // Get query from view
    const query = searchView.getInput();
    console.log(query);

    if(query){
        searchView.clearInput();
        searchView.clearResultsRight();
        //console.log(search.resultCust);
        try{

            if(query === 'customers'){    
        searchView.renderResultsOfCustomers(search.resultCust);
            }else if(query === 'representatives'){
        searchView.renderResultsOfReps(search.result);        
            }else{
                alert('Please search only for customers or representatives');
            }
            
            }catch(error){
                alert('Please search only for customers or representatives');
                clearLoader();
            }
    }
});









