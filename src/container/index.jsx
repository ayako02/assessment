import get from 'lodash.get';
import slice from 'lodash.slice';
import isEmpty from 'lodash.isempty';
import { useState, useEffect } from 'react';

import { Loader, Content } from '../components';

import './style.scss';

const INITIAL_INDEX = 0;
const NUMBER_DISPLAY = 6;

const App = () => {
  const [state, setState] = useState({ posts: [], records: [], filterKeyword: '', displayIndex: NUMBER_DISPLAY });

  const { posts, records, displayIndex, filterKeyword } = state;

  // Disabled button when display array length is more than that original array length
  const hasButton = displayIndex < posts.length;

  const handleLoadMore = () => {
    // Increment display array length each click
    const newIndex = displayIndex + NUMBER_DISPLAY;
    const newRecords = slice(posts, INITIAL_INDEX, newIndex);
    setState({ ...state, displayIndex: newIndex, records: newRecords });
  };

  const handleFilter = (keyword) => {
    // Only display record with selective keyword.
    const newRecords = records.filter((record) => {
      const item = record.categories.filter((item) => item.name === keyword);
      // Removes item with empty array from record
      return !isEmpty(item);
    });
    return setState({ ...state, filterKeyword: keyword, records: newRecords });
  };

  const getRecords = () => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        const posts = get(data, 'posts', []);
        // Mocked another data set for display purpose
        setState({ ...state, posts, records: slice(posts, INITIAL_INDEX, NUMBER_DISPLAY) });
      })
      .catch((error) => console.error('Failed to fetch data', error));
  };

  useEffect(() => getRecords(), []);

  return (
    <>
      <section className="container">
        <div className="w-70-l w-80-m w-90 mw6 mv5">
          {isEmpty(records) ? (
            <Loader />
          ) : (
            <Content
              records={records}
              hasButton={hasButton}
              keyword={filterKeyword}
              onClick={handleLoadMore}
              onFilterClick={handleFilter}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default App;
