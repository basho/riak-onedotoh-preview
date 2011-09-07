!SLIDE section

# Backends

## Bigger Data
## Less Blocking
## Clearer choices

!SLIDE bullets incremental

# Problem: Big Data

* Bitcask is fast but RAM-hungry
* Innostore has license problems...
* ...and is hard to tune
* ...and is bad at random access
* ...and is wasteful with disk

!SLIDE bullets incremental

# Bigger Data with LevelDB

* Created by Google, BSD-licensed
* On-disk ordered key-value store
* Like SSTables, generational
* Automatically compressed w/Snappy

!SLIDE bullets incremental

# Why use LevelDB?

* Key quantity less constrained by RAM
* Less page-swapping and wasted disk
* Fewer knobs to tune
* Don't have to insert in-order
* Less-encumbered license

!SLIDE bullets incremental

# Problem: Blocking

* Requests are serialized at vnodes
* "Fold" requests blocked vnodes...
* ...for list-keys/list-buckets
* ...for handoff
* ...for backup
* ...for full-sync in EDS replication

!SLIDE bullets incremental

# Less Blocking: Worker Pools

* Fold no longer block vnodes
* Works from read-only snapshots
* Throughput and latency improved
* Less intensive handoff

!SLIDE bullets incremental

# Problem: Too Many Backends

* 0.14.x had 8 backends:
* Bitcask, Innostore, DETS, Filesystem
* ETS, Cache, GB Trees
* Multi

!SLIDE bullets incremental

# Clearer Choices

* 1.0 has 5 backends.
* Removed DETS, Filesystem, GB Trees
* ETS/Cache merged into "Memory" backend
* Added LevelDB
* Innostore still shipped separately

!SLIDES bullets incremental

# Clearer Choices

* **Memory**: for volatile information
* **Bitcask**: for fast persistence
* **LevelDB**: for large or ordered datasets
* **Multi**: for more than one of the above
* **Innostore**: if you can tune properly
