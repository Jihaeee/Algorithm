N = int(input()) # 첫째 줄에 단어의 개수 N
words = []

for _ in range(N):
    word = input()
    words.append(word) # words는 단어들의 리스트 ['happy', 'new', 'year']

groupword = 0 # 그룹 단어 개수 

for word in words: # 'happy', 'new', 'year'
    alphabet = set() # 알파벳 집합 생성
    alphabet.add(word[0]) # 첫번째 알파벳 추가
    is_group = True

    for i in range(1, len(word)):
        # alphabet.add(word[i]) # 이 위치에 넣으면 검사 후 추가가 아닌 추가 먼저 하고 검사가 되므로 항상 True가 됨 
        if word[i] != word[i-1] and word[i] in alphabet: # i+1로 하면 마지막 글자에서 indexError 발생
            is_group = False
            break # 반복문을 종료시켜 불필요한 반복 줄이기 
        alphabet.add(word[i])

    if is_group :
        groupword +=1

print(groupword)