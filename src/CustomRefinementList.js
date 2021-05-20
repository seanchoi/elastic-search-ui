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
                ({item.count})
                </a>
            </li>
            ))}
        </ul>
    </div>
);

export const CustomRefinementList = connectRefinementList(RefinementList);