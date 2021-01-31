import React from 'react';
import Button from '../../ components/Button';
import { backIcon } from '../../config/image';
import * as ApiService from '../../services/api';
import { API_URL } from '../../config/url';
import { formatResponse } from '../../utils/utils';
import Loader from 'react-loader-spinner';
import ListView from '../../ components/LIstView';
import Dropdown from '../../ components/Dropdown';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      sortOrder: 'asc',
      sortBy: '',
      loading: false,
    };
  }

  async componentDidMount() {
    await this.getProducts();
  }

  filter = async (e) => {
      e.preventDefault();
      try {
        this.setState({ loading: true });
        const data = await this.getProducts();
        this.setState({ pictures: data.items, loading: false });
      } catch (error) {
        this.setState({ loading: false });
      }
  };

  getProducts = async () => {
    try {
      this.setState({loading:true});
      const response = await ApiService.post(API_URL,{query:`{
        Products {
          name
          imageUrl
          price
          _id
        }
      }`});
      console.log('resp',response);
      this.setState({products:response.data.data.Products, loading:false});
    } catch (error) {
      this.setState({loading:false});

    }
  };


  handleSortOrder = (e) => {
    this.setState({ sortOrder: e.target.value }, () => {
      this.sortPictures();
    });
  };

  handleSortBy = (e) => {
    this.setState({ sortBy: e.target.value }, () => {
      this.sortPictures();
    });
  };

  render() {
    console.log('STATE', this.state.products);
    return (
      <div className="container">
        <div className="header">
          <div className="header-left">
            <h1 className="title">Products</h1>
          </div>
          <div className="header-right">
          <form className="search-box" onSubmit={this.search}>
            <div className="filters-box">
              <Dropdown
                options={[
                  { label: 'Sort By', value: '' },
                  { label: 'Title', value: 'title' },
                  { label: 'Author', value: 'author' },
                  { label: 'Published Date', value: 'published' },
                  { label: 'Taken Date', value: 'date_taken' },
                ]}
                onChange={this.handleSortBy}
              />
              <Dropdown
                options={[
                  { label: 'Ascending', value: 'asc' },
                  { label: 'Descending', value: 'desc' },
                ]}
                onChange={this.handleSortOrder}
              />
              <div className="form-buttons">
                  <Button type="submit" text={'Filter'}></Button>
              </div>
            </div>
          </form>
          </div>
        </div>
        <div className="content">
          {this.state.loading ? (
            <div className="loader-wrapper">
              <Loader
                type="ThreeDots"
                color="#fddb3a"
                height={150}
                width={150}
              />
            </div>
          ) : (
            <div className="content-wrapper">
              <ListView
                products={this.state.products}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Products;
