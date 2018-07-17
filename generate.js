var jf = require('jsonfile');

function symbol_to_contract(json, dest_file_path) {
    obj = {}

    json.forEach(token => {
        obj[token.symbol] = token.contract_address
    });

    jf.writeFile(dest_file_path, obj, {spaces: 4}, function(err) {
        console.error(err)
    });
}

function contract_to_symbol(json, dest_file_path) {
    obj = {}

    json.forEach(token => {
        obj[token.contract_address] = token.symbol
    });

    jf.writeFile(dest_file_path, obj, {spaces: 4}, function(err) {
        console.error(err)
    });
}

var json_data = jf.readFileSync('tokens_data.json');
symbol_to_contract(json_data, 'docs/mainnet/symbol_to_contract/index.json');
contract_to_symbol(json_data, 'docs/mainnet/contract_to_symbol/index.json');