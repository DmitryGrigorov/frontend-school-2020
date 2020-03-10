import React, { PureComponent } from 'react';

export class FooterTodo extends PureComponent {

   onClick = (filterType) => {
     return (e) => {
       e.preventDefault();
       this.props.linkClickHandler(filterType);
     };
   };

  render() {
    const { typeView } = this.props;

    return (
      <div>
        <a href='' className={typeView === 'all' ? 'active-link' : 'link'} onClick={this.onClick('all')}>Все</a>
        <a href='' className={typeView === 'active' ? 'active-link' : 'link'} onClick={this.onClick('active')}>Активные</a>
        <a href='' className={typeView === 'complete' ? 'active-link' : 'link'} onClick={this.onClick('complete')}>Выполненные</a>
      </div>
    )
  }
}
