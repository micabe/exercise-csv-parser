import { PureComponent } from 'react'
import { DropzoneArea } from 'material-ui-dropzone'
import _ from 'lodash'
import { Row, Center, CenterLarge } from './atoms/Grid'
import { ButtonSmall } from './atoms/Buttons'
import ListItems from './ListItems'
import axios from 'axios'

export default class Dropzone extends PureComponent {
  state = {
    files: [],
    rows: [],
    validateRows: [],
    validate: false,
  }

  toggle = () => {
    const { files } = this.state

    if (files.length > 0) {
      this.setState(state => ({
        ...state,
        validate: !this.state.validate,
      }))
    }
  }

  onLoadingError = (e, row) => {
    e.persist()
    this.setState(state => ({
      validateRows: [
        ...state.validateRows,
        {
          ...row,
          error: 'Cannot Load image',
        },
      ],
    }))
  }

  onLoadingSuccess = (e, row) => {
    e.persist()
    const { naturalHeight, naturalWidth } = e.target

    this.setState(state => ({
      validateRows: [
        ...state.validateRows,
        {
          ...row,
          dimensions: {
            naturalHeight,
            naturalWidth,
          },
        },
      ],
    }))
  }

  handleChange = async (files, type) => {
    const file = files.pop()
    if (!file) return
    this.setState(
      state => ({
        files: [
          ...state.files,
          {
            file,
            type,
          },
        ],
      }),
      () => {
        const formData = new FormData()
        formData.append('image', file)
        axios
          .post('http://localhost:5000/api/v1/uploads', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(({ data }) => {
            this.setState(state => ({
              ...state,
              rows: data.response[0],
            }))
          })
      },
    )
  }

  render() {
    const { validate, rows, validateRows } = this.state

    const merged = _.merge(_.keyBy(rows, 'id'), _.keyBy(validateRows, 'id'))
    const values = _.values(merged)

    return (
      <Row>
        {!validate ? (
          <Center>
            <DropzoneArea
              dropzoneText=".csv uniquement"
              filesLimit={1}
              showFileNames
              onChange={this.handleChange}
              acceptedFiles={['text/csv']}
            />
            <ButtonSmall type="button" onClick={this.toggle}>
              Validate
            </ButtonSmall>
          </Center>
        ) : (
          <CenterLarge>
            <ListItems rows={values} onLoadingError={this.onLoadingError} onLoadingSuccess={this.onLoadingSuccess} />
            <ButtonSmall type="button" onClick={this.toggle}>
              Upload new CSV
            </ButtonSmall>
          </CenterLarge>
        )}
      </Row>
    )
  }
}
