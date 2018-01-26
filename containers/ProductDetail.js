import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Redux, { bindActionCreators } from 'redux'
import { editProduct, deleteProduct } from '../actions'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'
import FlatButton from 'material-ui/FlatButton'
// import Dialog from 'material-ui/Dialog'
// import RaisedButton from 'material-ui/RaisedButton'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
// import Avatar from 'material-ui/Avatar'
// import ActionAssignment from 'material-ui/svg-icons/action/assignment'
// import { blue500, yellow600, red500 } from 'material-ui/styles/colors'
// import Checkbox from 'material-ui/Checkbox'
// import SelectField from 'material-ui/SelectField'
// import MenuItem from 'material-ui/MenuItem'
// import NavigationClose from 'material-ui/svg-icons/navigation/close'
// import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import { GridList, GridTile } from 'material-ui/GridList'

const styles = {
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto'
  }
}

class ProductDetail extends Component {
  constructor(props) {
    super(props)
    const id = this.props.match.params.id,
      product = this.props.products[id]
    this.state = {
      id,
      product,
      disabled: true,
      nameControl: product.name,
      descriptionControl: product.description,
      numberControl: product.number
    }
  }

  renderImages() {
    return (
      <GridList cellHeight={180} style={styles.gridList}>
        <Subheader>Images</Subheader>
        {this.state.product.images.map((tile, i) => (
          <GridTile key={i} title={tile.name}>
            <img src={tile.url} />
          </GridTile>
        ))}
      </GridList>
    )
  }

  render() {
    return (
      <div>
        <Paper zDepth={2} style={{ padding: 10 }}>
          <TextField
            floatingLabelText="name"
            underlineShow={false}
            onChange={e =>
              this.setState({
                ...this.state,
                nameControl: e.target.value
              })
            }
            value={this.state.nameControl}
            disabled={this.state.disabled}
          />
          <Divider />
          <TextField
            floatingLabelText="number"
            underlineShow={false}
            onChange={e =>
              this.setState({
                ...this.state,
                numberControl: e.target.value
              })
            }
            value={this.state.numberControl}
            disabled={this.state.disabled}
          />
          <Divider />
          <TextField
            floatingLabelText="description"
            underlineShow={false}
            onChange={e =>
              this.setState({
                ...this.state,
                descriptionControl: e.target.value
              })
            }
            value={this.state.descriptionControl}
            disabled={this.state.disabled}
          />
          <Divider />
          {this.renderImages()}
          {this.state.disabled ? (
            <FlatButton
              label="Update Product"
              fullWidth={true}
              onClick={() => {
                console.log(this.props)
                this.setState({ ...this.state, disabled: false })
              }}
            />
          ) : (
            <div>
              <FlatButton
                label="Save"
                fullWidth={true}
                onClick={() => {
                  const newState = {
                    ...this.state,
                    product: {
                      ...this.state.product,
                      name: this.state.nameControl,
                      description: this.state.descriptionControl,
                      number: this.state.numberControl
                    },
                    disabled: false
                  }
                  this.props.editProduct(this.state.id, newState.product)
                  this.setState(newState)
                }}
              />
              <FlatButton
                label="Cancel"
                fullWidth={true}
                onClick={() => {
                  this.setState({
                    ...this.state,
                    disabled: true,
                    nameControl: this.state.product.name,
                    descriptionControl: this.state.product.description,
                    numberControl: this.state.product.number
                  })
                }}
              />
            </div>
          )}
        </Paper>
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
  return bindActionCreators(
    { editProduct: editProduct, deleteProduct: deleteProduct },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
