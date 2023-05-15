import PropTypes from 'prop-types';
import { ListItem, ListItemButton } from './ContactListItem.styled'

export default function ContactListItem({id, number, name, onDelete }){
    return(
        <ListItem key={id}>
          {name} : {number}
          <ListItemButton onClick={() => onDelete(id)}>Delete</ListItemButton>
        </ListItem>
    )
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}