!SLIDE section

# Core Improvements

!SLIDE bullets incremental

# Core Improvements

* Join/remove under load more stable
* No longer specify client IDs
* Stricter quorums (PR, PW)
* Key-listing is more stable and faster

<div class="note hidden">

<p>Changes to cluster membership while under load will have less impact
on normal operations: nodes won't receive requests until handoff has
finished and the ring will settle more quickly (ringready less
significant).</p>

<p>Now you also have the option of not specifying the client ID when
sending PUT requests. This means two things - clients no longer have
to be well-behaved (always sending client ID/managing the number of
unique client IDs), and that it's less likely that extraneous sibling
growth will occur.</p>

<p>Before 1.0, the R and W quorums you specify could be satisfied by any
vnodes in the preference list, including fallbacks. With the addition
of PR and PW, you can specify that you want the request to fail if the
number of requested "primary" (non-fallbacks) vnodes are
unavailable. This lets you be slightly stricter on consistency in the
cases of network partitions.</p>

<p>Thanks to a bunch of new code that handles "coverage" operations,
key-listing is much simpler to execute, is guaranteed to cover the
entire keyspace, and doesn't have some of the previous limitations.</p>

</div>
