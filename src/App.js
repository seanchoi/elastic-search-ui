import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  MenuSelect,
  RefinementList,
  Pagination,
  Highlight,
  SortBy,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import { CustomHits } from './CustomHits';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';

const searchClient = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');

function App() {
  return (
    <div>    

      <div className="container-fluid">
        <InstantSearch searchClient={searchClient} indexName="instant_search">
          <div className="search-panel">
            <div className="search-panel-left">
              <div className="category-title-box">
                <FontAwesomeIcon icon={faBox}/>
              </div>
              <div className="search-panel__filters">
                <RefinementList 
                    attribute="brand"                   
                    translations={{
                      showMore(expanded) {
                        return expanded ? 'show less' : 'Shore more'
                      },
                      noResults: 'No Results',
                      submitTitle: 'Submit your search query',
                      resetTitle: 'Clear your search quesry',
                      placeholder: 'Search Here...'
                    }}                  
                />              
              </div> 
            </div>
                         
            <div className="search-panel__results">
              <SearchBox
                className="searchbox"
                translations={{
                  placeholder: '',
                }}
              />
              <div className="refinement-dropdown-wrapper">
                <MenuSelect 
                  attribute="rating" 
                  translations={{
                    seeAllOption: 'Rating',
                  }}
                />
                <MenuSelect 
                  attribute="price_range"                 
                  translations={{
                    seeAllOption: 'Price Range',
                  }}
                />
                <SortBy
                  defaultRefinement="instant_search"
                  items={[
                    { value: 'instant_search', label: 'Sorty by Price' },
                    { value: 'instant_search_price_asc', label: 'Price Low-High' },
                    { value: 'instant_search_price_desc', label: 'Price High-Low.' },
                  ]}
                />
              </div>
              {/* <Hits hitComponent={Hit} /> */}
              <CustomHits hitComponent={Hit} />

              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

function Hit(props) {
  return (
    <article>
      <h1>
        <Highlight attribute="name" hit={props.hit} />
      </h1>
      <p>
        <Highlight attribute="description" hit={props.hit} />
      </p>
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;