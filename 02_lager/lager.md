!SLIDE section

# Lager

## A logging framework for Erlang/OTP

<div class="notes hidden">

Its purpose is to provide a more traditional way to perform logging in
an erlang application that plays nicely with traditional UNIX logging
tools like logrotate and syslog.

</div>

!SLIDE smbullets

# Levels

* debug
* info
* notice
* warning
* error
* critical
* alert
* emergency

!SLIDE bullets incremental

# Messages

* 1 line per message
* Easy to read
* Easy to parse

<div class="notes hidden">

1 line per message. Easier to read for humans. Easier to parse with
tools such as Splunk.

</div>

!SLIDE code small center

    @@@ log
    2011-09-06 11:48:50.611 [info] <0.784.0> hello world

<div class="notes hidden">

timestamp [log level] <pid> message

</div>

!SLIDE bullets incremental

# Files

* console.log
* error.log
* crash.log

<div class="notes hidden">

The default configuration for Riak sets up three log files (console,
error, and crash). The `run_erl` program will still output to the regular
`log/erlang.log.N` files but these can be ignored (there is no way to
disable logging from `run_erl`).

</div>

!SLIDE bullets incremental

# Rotation

* logrotate
* newsyslog

<div class="notes hidden">

If a log file is moved or deleted, Lager will reopen or recreate
the file and continue logging. A manual rotation process might look as
follows:

    mv error.log error.log.$(date +%Y%m%d)

</div>

!SLIDE code small center

    @@@ sh
    mv error.log error.log.$(date +%Y%m%d)

!SLIDE bullets incremental

# Additional Features

* Built-in log rotation
* Runtime log level changes

<div class="notes hidden">

Built-in log rotation requires a simple change to app.config.

Runtime log level changes require attaching to the console and issuing
erlang commands.

There is also the backend
[lager_syslog](https://github.com/basho/lager_syslog) that allows
lager to send messages to syslog. This backend, however, is not
bundled with Riak and would require less than trivial steps to enable.

</div>
