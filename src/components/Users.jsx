import React from "react"
import User from "./User"

class Users extends React.Component {
  render() {
    if (this.props.users.length > 0)
      return (
        <>
          {this.props.users.map(el => (
            <User onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={el.id} user={el} />
          ))}
        </>
      )
    else
      return (
        <div className="user">
          <h3>Ползователей нет</h3>
        </div>
      )
  }
}

export default Users
