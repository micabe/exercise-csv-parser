import PropTypes from 'prop-types'
import { PureComponent } from 'react'
import { FormHelperText, IconButton } from '@material-ui/core'
import { DropzoneArea } from 'material-ui-dropzone'
import { Row, Center } from './atoms/Grid'
import axios from 'axios'

export default class Dropzone extends PureComponent {
  static propTypes = {
    uploadExpertCv: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
  }

  state = {
    acrobatIcon: null,
    files: [],
  }

  handleChange = async (files, type) => {
    const file = files.pop()
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
        axios.post('http://localhost:5000/api/v1/uploads', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
      },
    )
  }

  render() {
    const { cv } = this.props
    return (
      <Row>
        <Center>
          <FormHelperText variant="filled">CSV upload</FormHelperText>
          <div>
            {cv && cv.normal && (
              <IconButton label="CSV upload">
                <a href="http://localhost:5000/api/v1/uploads" target="_blank" rel="noopener noreferrer">
                  .CSV
                </a>
              </IconButton>
            )}
            <DropzoneArea
              dropzoneText=".csv uniquement"
              filesLimit={1}
              showFileNames
              onChange={this.handleChange}
              acceptedFiles={['text/csv']}
            />
          </div>
        </Center>
      </Row>
    )
  }
}
