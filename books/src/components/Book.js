import React  from 'react';

class Book extends React.Component {

    render()  {
        console.log(this.props.book)
        return <div> 
            <h2 ><strong><u>{this.props.book.title}</u></strong></h2>
            <h4>{this.props.book.author}</h4>
            <h4>{this.props.book.pageNum}</h4>


        </div>

    }
}


export default Book;


