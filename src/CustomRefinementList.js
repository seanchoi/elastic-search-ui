import { faBath, faTv } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Highlight, connectRefinementList } from 'react-instantsearch-dom';

const RefinementList = ({
  items,
  isFromSearch,
  refine,
  searchForItems,
  createURL,
}) => (
    <div className="ais-RefinementList">
        <ul className="dpc-product-left-filter">
            {/* <li className="ais-RefinementList-item">
            <input
                type="search"
                onChange={event => searchForItems(event.currentTarget.value)}
            />
            </li> */}
            {items.map(item => (
                <li className="ais-RefinementList-item" key={item.label}>
                    <div className="list-item-justify-wrapper">
                    <div className="filter-icon-wrapper">
                        <FontAwesomeIcon icon={faBath}/>
                    </div>
                    <a
                    className="dpc-product-filter-item"
                    href={createURL(item.value)}
                    style={{ fontWeight: item.isRefined ? 'bold' : '' }}
                    onClick={event => {
                        event.preventDefault();
                        refine(item.value);
                    }}
                    >
                    {isFromSearch ? (
                        <Highlight attribute="label" hit={item} />
                    ) : (
                        item.label
                    )}{' '}
                
                    </a>
                    </div>
                    <div className="filtered-item-number">
                        {item.count}
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

export const CustomRefinementList = connectRefinementList(RefinementList);