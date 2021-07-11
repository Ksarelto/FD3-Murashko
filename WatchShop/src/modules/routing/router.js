import React from 'react';
import { Route } from 'react-router-dom';

import {Catalog_Page} from './catalog_page';
import {Contacts_Page} from './contacts_page';
import { Basket_Page } from './basket_page';
import {Item_Page} from './item_page';
import {Main_Page} from './main_page';

export class RouterDOM extends React.Component {

  render() {

    return (
        <div>

          <Route path="/" exact component={Main_Page} />
          <Route path="/contacts" component={Contacts_Page} />
          <Route path="/catalog/:clid" component={Catalog_Page} />
          <Route path="/basket" component={Basket_Page} />
          <Route path="/item/:clid" component={Item_Page} />
        </div>
    );

  }

}
