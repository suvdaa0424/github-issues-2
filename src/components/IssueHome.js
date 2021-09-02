import React, { useEffect, useState } from 'react'
import IssueList from './IssueList'
function IssueHome() {
    const [issues, setIssues] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/repos/facebook/create-react-app/issues')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setIssues(data)
        })
        // need to ask about the empty array at end of useEffect
    },[])
    return (
        <div>
            {issues.map((issue, index) => {
            return( <IssueList key={issue.id} index={index} data={issue} />              
            )          
        })}
        </div>
    )
}
export default IssueHome