Time to complete: ~50 min

# Part A

NOTE: requires python 3 to be installed on local machine

Command: `python3 compare.py`

Run the `compare.py` script to find the intersection of the two files' contents. Using the `input` function it will prompt you for the 2 files on which to operate.

If you do not have files matching the question's description, the `generate_file.py` can be used to create a file with the relevant characteristics in the local directory.

# Part B

Regarding whether the current implementation should be changed when operating on files containing 1 billion strings, there is a likelihood that the current implementation could begin to take prohibitively long, depending on the requirements for this process (e.g. is end user waiting on the other side of a screen for an answer?)

The time complexity of calculating the intersection of 2 python sets (or in this case simply iterables) is `O(min(len(s), len(t))` ([source1](https://wiki.python.org/moin/TimeComplexity), [source2](https://www.geeksforgeeks.org/internal-working-of-set-in-python/)) and increases linearly with the size of the sets. So if the current process takes about 1 second on my local machine (~2017 macbook pro), it would take ~100 seconds when operating on files with 1 billion rows.

In addition to (or perhaps in place of) refactoring the current codebase, it would also make sense to deploy this process in a distributed fleet of compute servers/instances that are ready to process files when they become available (e.g. listening for messages from a queue indicating new files are ready for comparison). But that kind of architecture falls outside the scope of this assignment.