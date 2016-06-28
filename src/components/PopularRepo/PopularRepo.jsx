import React from 'react';
import RepoItem from '../RepoItem/RepoItem.jsx';
import './style.less';

export default () => (
  <div className="repo-list">
    <div className="repo-list-header">POPULAR REPOSITORIES</div>
    <div>
      {[1, 2, 3, 4, 5, 6].map(i => <RepoItem key={i} />)}
    </div>
  </div>
);