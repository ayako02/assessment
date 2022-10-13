import get from 'lodash.get';
import { Children } from 'react';

import ImageCard from './ImageCard';

const Content = ({ keyword, records, onClick, onFilterClick, hasButton }) => (
  <>
    <div className="content mb4">
      <h1 className="f5 lh-copy mr3">Filter by</h1>
      <button onClick={() => onFilterClick('Surveys and Forms')} className="btn--primary tracked dim">
        Surveys and Forms
      </button>
    </div>

    {Children.toArray(
      records.map((item) => {
        const title = get(item, 'title', '');
        const name = get(item, 'author.name', '');
        const avatar = get(item, 'author.avatar', '');
        const categories = get(item, 'categories', []);
        return <ImageCard keyword={keyword} title={title} name={name} avatar={avatar} categories={categories} />;
      })
    )}

    {hasButton && (
      <div className="w-100 tc mt4">
        <button onClick={onClick} className="btn--secondary tracked dim ba">
          Load more
        </button>
      </div>
    )}
  </>
);

export default Content;
