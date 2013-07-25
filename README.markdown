# himera

ClojureScript compiler as service with a simple in-browser REPL.

[Try it on Heroku](http://himera.heroku.com)

## Build

    lein deps
	lein cljsbuild once

## Usage

To start Himera locally using [Leiningen](https://github.com/technomancy/leiningen), type the following from the project directory.

    lein run 8080

Then visit <http://localhost:8080/> and never stop typing.  For example, common ClojureScript functions and macros work as expected:

```clojure

    (map (fn [n] (* n n n)) [1 2 3 4])
	;=> (1 8 27 64)
	
	(for [[k v] {:a 1 :b 2}] [v k])
	;=> ([1 :a] [2 :b])
	
	(if (< x 10) :less :more)
	;=> :less
	
	(defn sqr [n] (* n n))
	
	(map sqr [1 2 3])
	;=> (1 4 9)
	
	(deftype Cons [h t])
	
	(.-t (Cons. 1 108))
	;=> 108
	
	(defmulti classify-age :age)
	
	(defmethod classify-age 36 [_] :ancient)
	
	(classify-age {:age 36})
	;=> :ancient
```

To use [jQuery](http://jquery.com) from the Himera REPL, try the following:

```clojure

    (def anchor (js/jQuery "a"))
	
	(.text anchor)
	;=> "Source..."
	
	(.text anchor "Github repo...")
```

To exercise the compilation service from the command line, try the following:

```sh

    $ curl -X POST -H "Content-Type: application/clojure" \
	    -d '{:expr ((fn foo [x] (js/alert x)) 42)}' \
		http://localhost:8080/compile
	
	#=> {:js "(function foo(x){\nreturn alert.call(null,x);\n}).call(null,42)"}
```

## Current limitations

  * No way to override functions defined in `cljs.core`
  * `defrecord` access is not working
  * Creating namespaces does not work
  * Other problems not yet discovered
  * ClojureScript's `/` function is not munged properly

## Plans

  * Fix the limitations above
  * Stateless service
  * More clients
  * Dynamic JS library loading
  * Other plans not yet devised

## Thanks

Thanks to Tim McCormack, Paul Michael Bauer, and Anthony Grimes for the hard work in blazing the trail for online Clojure and ClojureScript REPLage and compilationation.  Also thanks to Craig Andera and Chris Redinger for moral support and letting me bounce insane ideas off of them.

## License

Copyright (C) 2012, 2013 Fogus and Relevance, Inc.

Distributed under the Eclipse Public License, the same as Clojure.
