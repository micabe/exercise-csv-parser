import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import CheckCircle from '@material-ui/icons/CheckCircle'
import Cancel from '@material-ui/icons/Cancel'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  item: {
    height: '50px',
    width: '50px',
  },
}))

const ListItems = ({ rows, onLoadingError, onLoadingSuccess }) => {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      {rows.map(row => (
        <div key={row.id}>
          <ListItem alignItems="flex-start">
            <ListItemIcon>{row.error ? <Cancel color="secondary" /> : <CheckCircle color="primary" />}</ListItemIcon>
            <ListItemText
              secondary={<div className={classes.inline}></div>}
              primary={
                <React.Fragment>
                  <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                    {row.id} - {row.name}-{' '}
                    {row.error ? row.error : `(${row.dimensions?.naturalHeight} x ${row.dimensions?.naturalWidth})`}
                  </Typography>
                </React.Fragment>
              }
            />
            {!row.error && (
              <ListItemAvatar>
                <img
                  className={classes.item}
                  src={row.url}
                  alt={row.name.title}
                  loading="lazy"
                  onError={e => onLoadingError(e, row)}
                  onLoad={e => onLoadingSuccess(e, row)}
                />
              </ListItemAvatar>
            )}
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  )
}

export default ListItems
