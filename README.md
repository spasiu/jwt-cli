## What is this package for?

This package gives you a node based command line tool for copy-pasting key secret pairs and getting back JWTs.

## How to use this package?

0. Clone this repo into your user directory (it should located at `~/jwtgenerator`)

2. In the terminal change directory to *~/jwtgenerator* and run `npm install` to install dependencies

3. In your `~/.zshrc` or `~/.bashrc` file add the following aliases:

```shell
alias appjwt="~/jwtenerator/index.js app"
alias accountjwt="~/jwtenerator/index.js account"
alias appuserjwt="~/jwtenerator/index.js appUser"
```

4. Restart your terminal and run the following sample commands to see the output:

```shell
accountjwt act_5c488f33f2bb9a0022ed4920	KPTm2S-Bmn82Wln9RDllgK0OvbvQXV3Y2INeGdLKPyNoT013gSK4xlLQVUip5PvGp_q6SKjkifhjJ1gsMVHRWQ

appjwt app_5c488f4cefe7b800224016c1	wI72ai4EhcAQ-W08a8f3BAo3d-ylC1sm_lzKYmQrOhoR3rUMnF-5UA0kBmyOuAhFgyrXLKGfzJXYL6IhDOu00A

appuserjwt app_5c488f4cefe7b800224016c1	wI72ai4EhcAQ-W08a8f3BAo3d-ylC1sm_lzKYmQrOhoR3rUMnF-5UA0kBmyOuAhFgyrXLKGfzJXYL6IhDOu00A bob
```

**Note:** that extra whitespace is ignored between arguments passed to the script, so you can copy the key and secret as a single action.

**Note:** all tokens are generated with a 1 hour expiration by default to reduce the risk posed by a leaked token.
