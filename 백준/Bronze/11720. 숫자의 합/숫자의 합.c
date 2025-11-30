#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
	int n;
	char a[100];
	int sum = 0;
	scanf("%d", &n);
	scanf("%s", a);
	for (int i = 0; i < n; i++) {
		sum += a[i]-'0';
	}
	printf("%d", sum);

	return 0;
}
