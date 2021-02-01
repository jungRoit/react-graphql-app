import React from 'react';
import Button from '../../ components/Button';
import { backIcon } from '../../config/image';
import * as ApiService from '../../services/api';
import { API_URL } from '../../config/url';
import { formatResponse } from '../../utils/utils';
import Loader from 'react-loader-spinner';
import ListView from '../../ components/LIstView';
import Dropdown from '../../ components/Dropdown';
import Pagination from '../../ components/Pagination';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      sortOrder: 'asc',
      sortBy: 'name',
      loading: false,
      offset: 0,
      limit: 5,
      count: 0
    };
  }

  async componentDidMount() {
    await this.getProducts();
  }

  filter = async (e) => {
    e.preventDefault();
    this.setState({offset:0}, () => {
      this.filterProduct();
    });
  };

  getProducts = async () => {
    try {
      this.setState({loading:true});
      const response = await ApiService.post(API_URL,{query:`{
        Products(offset:${this.state.offset},sortBy:"${this.state.sortBy}",order:"${this.state.sortOrder}") {
          products {
            name
          imageUrl
          price
          _id
          }
          count
        }
      }`});
      console.log('resp',response);
      this.setState({products:response.data.data.Products.products, count: response.data.data.Products.count, loading:false});
    } catch (error) {
      this.setState({loading:false});

    }
  };

  filterProduct = async () => {
    try {
    const response = await ApiService.post(API_URL,{query:`{
      Products(offset:${this.state.offset},sortBy:"${this.state.sortBy}",order:"${this.state.sortOrder}") {
        products {
          name
        imageUrl
        price
        _id
        }
        count
      }
    }`});
    console.log('resp',response);
    this.setState({products:response.data.data.Products.products, count: response.data.data.Products.count, loading:false});
  } catch (error) {
    this.setState({loading:false});
  }
  }


  handleSortOrder = (e) => {
    this.setState({ sortOrder: e.target.value }, () => {
    });
  };

  handleSortBy = (e) => {
    this.setState({ sortBy: e.target.value }, () => {
    });
  };

  handlePageChange = (data) => {
    console.log('data', data);
    const offset = Math.ceil(this.state.limit * data.selected);

    this.setState({offset},()=>{
      this.getProducts();
    })
  }

  render() {
    console.log('STATE', this.state.products);
    return (
      <div className="container">
        <div className="header">
          <div className="header-left">
            <h1 className="title">Products</h1>
          </div>
          <div className="header-right">
          <form className="search-box" onSubmit={this.filter}>
            <div className="filters-box">
              <Dropdown
                options={[
                  { label: 'Sort By', value: '' },
                  { label: 'name', value: 'name' },
                  { label: 'price', value: 'price' },
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
              <div className="pagination-wrapper">
              <Pagination total={this.state.count/this.state.limit} onChange={this.handlePageChange} />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Products;
