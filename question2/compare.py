import time

f1 = input('File 1: ')
f2 = input('File 2: ')
print('Comparing contents of {} to {}...'.format(f1, f2))

with open(f1, 'r', newline="\n") as file1:
    with open(f2, 'r', newline="\n") as file2:
        # start = time.time()
        similarities = set(file1).intersection(file2)
        similarities.discard('\n')
        # end = time.time()

print(len(similarities))
