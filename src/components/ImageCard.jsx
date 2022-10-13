import { Children } from 'react';

const ImageCard = ({ keyword, title, name, avatar, categories }) => (
  <article className="mt3">
    <a className="link dt w-100 bb b--black-10 dim blue" href="#0">
      <div className="dtc w3">
        <img alt={name} src={avatar} className="db w-100" />
      </div>
      <div className="dtc v-top pl2">
        <h1 className="f6 f5-ns fw6 lh-title black mv0">{title}</h1>
        <h2 className="f6 fw4 mt2 mb0 black-60 mb3">{name}</h2>
        <dl className="mt2 f6">
          <dt className="clip">Categories</dt>
          <dd className="ml0">
            {Children.toArray(
              categories.map((item) => {
                const tagStyle =
                  keyword === item.name ? 'f7 br2 ph2 pv1 mb2 dib white bg-purple mr2' : 'f7 br2 ba ph2 pv1 mb2 dib purple mr2';
                return <div className={tagStyle}>{item.name}</div>;
              })
            )}
          </dd>
        </dl>
      </div>
    </a>
  </article>
);

export default ImageCard;
