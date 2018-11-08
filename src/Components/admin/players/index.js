import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../Hoc/AdminLayout';
import Table from '@material-ui/core/Table';
import { TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import { firebasePlayers } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../ui/misc';

class AdminPlayers extends Component {

  state = {
    isloading: true,
    players: []
  }

  componentDidMount() {
    firebasePlayers.once('value').then((snapshot) => {
      const players = firebaseLooper(snapshot);

      this.setState({
        isloading: false,
        players: reverseArray(players)
      })
    })
  }

  render() {
    return (
      <AdminLayout>
        <div>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Number</TableCell>
                  <TableCell>Position</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { this.state.players ?
                  this.state.players.map((player, i) =>(
                    <TableRow key={i}>
                      <TableCell>
                        <Link to={`/admin_players/add_players/${player.id}`}>
                          {player.name}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link to={`/admin_players/add_players/${player.id}`}>
                          {player.lastname}
                        </Link>
                      </TableCell>
                      <TableCell>{player.number} </TableCell>
                      <TableCell>{player.position}</TableCell>
                    </TableRow>
                  ))
                    :
                    null
                }
              </TableBody>
            </Table>
          </Paper>
          <div className="admin_progress">
            {this.state.isLoading ?
              <CircularProgress thickness={7} style={{color: '#98c5e9'}} />
              : ''
          }
          </div>

        </div>
      </AdminLayout>
    );
  }
}

export default AdminPlayers;