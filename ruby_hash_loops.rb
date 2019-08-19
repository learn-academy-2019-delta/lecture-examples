# ----------------RUBY HASHES AND LOOPS 8/19/2019

# HASHES - collections of data, key: value pairs in Ruby, much like JS objects
# The => is called a rocket

lunch_order1 = { tacos: 10, type: "Carnitas"}
# Access the value by the hash
# p lunch_order1[:tacos]

# With a hash rocket
lunch_order2 = { 'tacos' => 10, 'type' => "Carnitas" }
# p lunch_order2['tacos']

# With a Ruby symbol
lunch_order3 = { :tacos => 10, :type => "Carnitas" }
# p lunch_order3[:tacos]


# A Hash can also be created with Hash.new

burger_order = Hash.new
burger_order['Double Cheese Burger'] = 3
# p burger_order

burger_order['Veggie Burger'] = 3
# p burger_order



# LOOPS - DO/END
# times

5.times do
  # p 'times loop'
end


loop_num = 10
loop_num.times do
  # p 'hello'
end

# while
i = 0
while i <= 5 do
  # p i
  i+= 1
end


a = [3, 4, 17]
# the || are block code parameters
a.each do |element|
  # p element * 3
end


# MAP - the curly braces take the place of the DO/END block

ex_array = [8, 9, 15, 3, 12, 13]

# p ex_array.map{ |i| i * 3 }


def mult_number arr
  # p mult3 = arr.map{ |el| el * 3 }
end
mult_number ex_array



arr1 = ["Louise", "Gene", "Tina"]

def add_name arr
  arr.map{|element| "#{element} Belcher"}
end
# p add_name arr1



new_nums = [8, 9, 15, 3, 12, 13]

def odd_even arr
  arr.map { |value|
    if value % 2 == 0
      "even"
    else
      "odd"
    end
  }
end
# p odd_even new_nums


# map is not a mutator
# p new_nums


# use the ! to save changes
def odd_even arr
  arr.map! { |value|
    if value % 2 == 0
      "even"
    else
      "odd"
    end
  }
end
# p odd_even new_nums
# p new_nums






# -------------------EXTRA EXAMPLES

# Write a method that takes in an array and returns only the odd numbers
# The .select method will evaluate to a boolean value

nums = [8, 9, 15, 3, 12, 13]
# expected output = [9, 15, 3, 13]

def odd_only arr
  arr.select{|value| value % 2 != 0}
end
# p odd_only nums




# Write a method that capitalizes the first letter of each word in a sentence

my_sentence = 'hello there, how are you?'
# expected output = "Hello There, How Are You?"

def cap_first sentence
  sentence.split(" ").map{|value| value.capitalize}.join(" ")
end
# p cap_first my_sentence



# Write a method that removes the vowels from a sentence

no_vowels = "I have no vowels"
# expected output = " hv n vwls"

def remove_vowel sentence
  sentence.delete 'aeiou'
end
# p remove_vowel no_vowels
