import React from 'react';
import { Table } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

bootstrapUtils.addStyle(Table, 'custom');

export default class CustomTable extends React.Component {
    render() {
        var styles = {};
        return (
            <div>
                <Table style={styles} bsStyle="custom">Custom</Table>
            </div>
        );
    }
}