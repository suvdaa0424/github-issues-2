import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Issue from "./Issue";
function IssueList(props) {
    const { title, number, created_at, user } = props.data;
    const index = props.index;
    console.log();
    return (
        <Container>
            <ListGroup>
                <ListGroup.Item ><h3><Link to={`/issues/${index}`}>{title}</Link></h3><br />
                    <Issue data={props.data} />
                    <span>#{number} opened {created_at} by {user.login}</span>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    );
}
export default IssueList