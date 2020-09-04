import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from '../../../routes'
import Layout from '../../../components/Layout'

class RequestIndex extends Component { 
    static async getInitialProps(props) {
        const { address } = props.query
        return address
    }

    render() {
        return (
            <Layout>
                <h3>Request List</h3>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <Button primary>Add Request</Button>
                </Link>
            </Layout>
        )
    }
}

export default RequestIndex