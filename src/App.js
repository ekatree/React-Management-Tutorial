import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import { Table,TableHead,TableBody,TableRow,TableCell,Paper } from '@mui/material';
import withStyles from '@mui/material';

const styles = theme => ({
  root:{
    width: '100%',
    overflowX: "auto"
  },
  table:{
    minWidth: 1080
  }
})

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '테스트',
    'birthday' : '901212',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '홍길동',
    'birthday' : '961231',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '아무개',
    'birthday' : '960101',
    'gender' : '여자',
    'job' : '대학생'
  }
]

class App extends Component{
  render(){
    
    return(
      <div>
        <Paper sx={{overflowX: "auto"}}>
          <Table stickyHeader sx={{maxWidth: '1080px', minWidth: '1080px'}}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {
              customers.map(c=>{
                return (
                <Customer 
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />)
              })
            }
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}
export default App;
