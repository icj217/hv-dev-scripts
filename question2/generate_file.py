import random
import string

def generate_random_string(size=32, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))

filename = "{}.txt".format(generate_random_string())
f = open(filename, "w+")

for i in range(500000):
    f.write("{}\n".format(generate_random_string()))

f.close()

print('Done writing to file!')