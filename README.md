# Asyncjs Utilities

Utility methods for working with [asyncjs](http://caolan.github.io/async/v3/)

## returnResult

Return a specific result of an async/auto process

Omit a cbk and specify reject/resolve if using a Promise

    {
      [of]: <Property String>
      [reject]: <Promise Reject Function>
      [resolve]: <Promise Resolve Function>
    }
    [cbk]: <Callback Function>

    @returns
    <Function> (err, res) => {}
