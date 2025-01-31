import React from 'react'
import { Link } from 'gatsby'

import useAllCategories from '../hooks/use-all-categories'
import getCategoryUrl from '../utils/getCategoryUrl'

const MainMenu = () => {
  const categories = useAllCategories().reduce((accumulator, {node}) => {
    accumulator[node.frontmatter.slug] = node.frontmatter;
    return accumulator;
  }, {});

  return (
    <nav>
      <Link to={getCategoryUrl(categories.itinerari.slug)}>
        {categories.itinerari.name}
      </Link>
      <span>
        <Link to={getCategoryUrl(categories.viaggi.slug)}>
          {categories.viaggi.name}
        </Link>
        <nav>
          <Link to={getCategoryUrl(categories['viaggi/marocco'].slug)}>
            {categories['viaggi/marocco'].name}
          </Link>
          <Link to={getCategoryUrl(categories['viaggi/romania'].slug)}>
            {categories['viaggi/romania'].name}
          </Link>
          <Link to={getCategoryUrl(categories['viaggi/turchia'].slug)}>
            {categories['viaggi/turchia'].name}
          </Link>
        </nav>
      </span>
      <span>
        <Link to={getCategoryUrl(categories.recensioni.slug)}>
          {categories.recensioni.name}
        </Link>
        <nav>
          <Link to={getCategoryUrl(categories['recensioni/protezione-moto'].slug)}>
            {categories['recensioni/protezione-moto'].name}
          </Link>
          <Link to={getCategoryUrl(categories['recensioni/valigie-e-borse-moto'].slug)}>
            {categories['recensioni/valigie-e-borse-moto'].name}
          </Link>
          <Link to={getCategoryUrl(categories['recensioni/libri'].slug)}>
            {categories['recensioni/libri'].name}
          </Link>
          <Link to={getCategoryUrl(categories['recensioni/gadget'].slug)}>
            {categories['recensioni/gadget'].name}
          </Link>
        </nav>
      </span>
      <Link to="/foto">Foto</Link>
      <Link to={getCategoryUrl(categories.video.slug)}>
        {categories.video.name}
      </Link>
    </nav>
  );
}

export default MainMenu
