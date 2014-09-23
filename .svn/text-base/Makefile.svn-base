# Makefile for Lab #3

#    make	      # Defaults to the first target: default
#    make default    # Same as make compile.
#    make compile    # Compile all sources
#    make clean      # Remove extraneous or rebuildable files
#    make style      # Run style checks.
#    make time       # Time Dups1, Dups2.

# Define $(SRCS) to be a list of Java files.
SRCS = Dups1.java Dups2.java Natural.java ListTour.java

MAIN_CLASSES = $(SRCS:.java=.class)

# Compiler flags for Java compilation

JFLAGS = -g

# The targets following .PHONY aren't actually files; they serve as commands.
.PHONY: compile default style time clean

# By default, compile all sources
default: compile

compile: $(MAIN_CLASSES)

style:
	style61b $(SRCS)

time: Dups1.class Dups2.class
	@echo "No iterators, linked:"
	time java Dups1 linked < hammurabi110.txt
	@echo "======="
	@echo "No iterators, arrays:"
	time java Dups1 arrays < hammurabi110.txt
	@echo "======="
	@echo "Iterators, linked:"
	time java Dups2 linked < hammurabi110.txt
	@echo "======="
	@echo "Iterators, arrays:"
	time java Dups2 arrays < hammurabi110.txt

time-dup3: Dups3.class
	@echo "======="
	@echo "Iterators, linked, smarter:"
	time java Dups3 linked < hammurabi110.txt
	@echo "======="
	@echo "Iterators, arrays, smarter:"
	time java Dups3 arrays < hammurabi110.txt	

time-dup4: Dups4.class
	@echo "======="
	@echo "Iterators, linked, uses treeSet:"
	time java Dups4 linked < hammurabi110.txt
	@echo "======="
	@echo "Iterators, arrays, uses treeSet:"
	time java Dups4 arrays < hammurabi110.txt

# Remove extraneous or reconstructable files.
clean:
	rm -f *.class *~

$(MAIN_CLASSES): $(SRCS)
	javac $(JFLAGS) $(SRCS)

