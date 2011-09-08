!SLIDE section

# Riak Pipe

## MapReduce 2.0

!SLIDE bullets incremental

# The Problem

* Originally just for link-walking
* Generalized, added JavaScript
* Growing pains while refactoring
* Impacted latency under load

<div class="notes hidden">
Riak's MapReduce was originally just for link-walking, that is, taking
a single key and following its links to other keys and returning
them. The design of the original MapReduce was a generalization of
this pattern to allow map and reduce phases. Along the way we added
support for JavaScript map and reduce functions, which people use a
lot.  However, as we started to help more people with cases where they
needed to process ever larger datasets in single jobs, we discovered
that the current system couldn't scale up as reliably as we'd
like. Large jobs would timeout before they even got to the map
phase. There was a large amount of IO contention. Latency for regular
operations were negatively impacted. So we decided it needed to be rewritten.
</div>

!SLIDE bullets incremental

# The Rewrite - Riak Pipe

* Generalize distributed processing
* Better balance resources
* Decouple coordination from execution
* Emulate "Legacy" MapReduce
* Enable other processing models

<div class="notes hidden"> 

<p>So when solving this problem we decided to start from
scratch. Instead of making a system that was specific to Riak's
storage mechanism, we instead created a generalized distributed
computation framework on top of <code>riak_core</code> called
<code>riak_pipe</code>. It's centered around the concept of a "flow"
or "pipeline". You send inputs into one end of the pipe, they pass
through a number of transformations called "fittings" and then outputs
are emitted from the other end.</p>

<p>By rewriting MapReduce in this way we were able to better balance
resource utilization, reducing contention on IO and introducing
backpressure into the system.</p> 

<p> It also has better operational characteristics because it
decouples coordination of the computation from the execution of the
computation, which reduces bottlenecks and lets you more reliably
start up and teardown jobs.</p>

<p>Because we generalized the framework, without too much work we were
able to both emulate the original MapReduce system -- you can use the
same JSON format you did before when submitting a job -- and to
provide the opportunity for developers to create their own processing
models on top. Again, this is another tool in the Riak platform for
building your own distributed systems.</p>

</div>
