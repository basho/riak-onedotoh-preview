!SLIDE section

# Lager

## A logging framework for Erlang/OTP

!SLIDE smbullets incremental

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

# Messages

    @@@ log
    2011-09-06 11:48:50.611 [info] <0.784.0> hello world

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
the file and continue logging.

</div>

!SLIDE bullets incremental

# Additional Features

* Built-in log rotation
* Runtime log level changes
