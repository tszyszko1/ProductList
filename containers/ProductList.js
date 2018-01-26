import React, { Component } from 'react'
import { connect } from 'react-redux'
import Redux, { bindActionCreators } from 'redux'

import { fetchProducts } from '../actions'

import { List, ListItem } from 'material-ui/List'
import ActionInfo from 'material-ui/svg-icons/action/info'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import Avatar from 'material-ui/Avatar'
import FileFolder from 'material-ui/svg-icons/file/folder'
import ActionAssignment from 'material-ui/svg-icons/action/assignment'
import { blue500, yellow600 } from 'material-ui/styles/colors'
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart'
import TextField from 'material-ui/TextField'

class ProductsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
      products: this.props.products
    }
  }

  componentWillMount() {
    this.props.fetchProducts()
  }

  goToProduct(id) {
    this.props.history.push('/product/' + id)
  }

  renderProducts() {
    return this.state.products.map((product, i) => {
      return (
        <ListItem
          key={i}
          leftAvatar={<Avatar icon={<FileFolder />} />}
          primaryText={product.name}
          onClick={e => this.goToProduct(i)}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <List>{this.renderProducts()}</List>
        <Divider inset={true} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts: fetchProducts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
